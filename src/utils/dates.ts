type Interval = {
  start: Date;
  end: Date | undefined;
};

const isNonEmptyArray = <T>(arr: T[]): arr is [T, ...T[]] => arr.length > 0;

// Function to merge overlapping intervals and handle null end times
function mergeIntervals<T extends Interval>(data: T[]): T[] {
  if (!isNonEmptyArray(data)) return [];

  // Substitute null end times with the current date
  const intervals = data.map(
    (interval) =>
      ({
        start: interval.start,
        end: interval.end ?? new Date(), // Use current date if end is null
      }) as const
  ) as T[];

  // Sort intervals by their start date
  intervals.sort((a, b) => a.start.getTime() - b.start.getTime());

  const firstInterval = intervals[0];

  if (!firstInterval) {
    return [];
  }

  const merged: Interval[] = [firstInterval];

  for (let i = 1; i < intervals.length; i++) {
    const last = merged[merged.length - 1];
    const current = intervals[i];

    if (!last || !current) continue;

    if (current.start <= (last.end ?? new Date())) {
      last.end = new Date(
        Math.max(
          (last.end ?? new Date()).getTime(),
          (current.end ?? new Date()).getTime()
        )
      );
    } else {
      merged.push(current);
    }
  }

  return merged as T[];
}

function calculateTotalElapsedTime(intervals: Interval[]): number {
  const mergedIntervals = mergeIntervals(intervals);

  return mergedIntervals.reduce((total, interval) => {
    return (
      total +
      ((interval.end ?? new Date()).getTime() - interval.start.getTime())
    );
  }, 0);
}

export type TotalYears = { years: number; rounding: "below" | "above" | "exact" };

export const getElapsedTimeInYears = <T extends Interval>(
  intervals: T[]
): TotalYears => {
  const years =
    calculateTotalElapsedTime(intervals) / (1000 * 60 * 60 * 24 * 365);
  const rounded = Math.round(years);
  const modulus = years % rounded;

  if (modulus === 0) {
    return {
      years: rounded,
      rounding: "exact",
    } as const;
  }

  if (modulus > 0.5) {
    return {
      years: rounded,
      rounding: "above",
    } as const;
  }

  return {
    years: rounded,
    rounding: "below",
  } as const;
};

export const toDisplayDate = (date?: Date): string => {
  if (!date) {
    return "Present";
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
};

export const toShortDate = (date: Date) => date.toISOString().slice(0, 10);
