import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

/**
 * Format a date string to relative time (e.g., "2 hours ago")
 */
export const timeAgo = (date) => {
    return dayjs(date).fromNow();
};

/**
 * Format a date string to readable format
 */
export const formatDate = (date, format = 'MMM D, YYYY') => {
    return dayjs(date).format(format);
};

/**
 * Capitalize the first letter of a string
 */
export const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Get initials from a name (e.g., "John Doe" → "JD")
 */
export const getInitials = (firstName, lastName) => {
    return `${firstName?.charAt(0) || ''}${lastName?.charAt(0) || ''}`.toUpperCase();
};
