// Date and time utilities
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

export const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
};

// Validation utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;
  return phoneRegex.test(phone);
};

// Price formatting
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
};

// Service types
export const SERVICE_TYPES = {
  RECORDING: 'recording',
  MIXING: 'mixing',
  LIVE: 'live',
  REHEARSAL: 'rehearsal',
} as const;

export type ServiceType = typeof SERVICE_TYPES[keyof typeof SERVICE_TYPES];

// Duration options
export const DURATION_OPTIONS = [
  { value: '1', label: '1 Jam', hours: 1 },
  { value: '2', label: '2 Jam', hours: 2 },
  { value: '4', label: '4 Jam', hours: 4 },
  { value: '8', label: '8 Jam (Full Day)', hours: 8 },
] as const;

// Time slots
export const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
  '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
] as const;

// API response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Booking form data type
export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: ServiceType;
  date: string;
  time: string;
  duration: string;
  message?: string;
}

// Utility function to get minimum booking date (tomorrow)
export const getMinBookingDate = (): string => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
};

// Utility function to check if date is available
export const isDateAvailable = (date: string): boolean => {
  const selectedDate = new Date(date);
  const today = new Date();
  return selectedDate > today;
};

// Utility function to generate booking ID
export const generateBookingId = (): string => {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substr(2, 5);
  return `ALY-${timestamp}-${randomStr}`.toUpperCase();
}; 