'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, User, Mail, Phone, Music } from 'lucide-react';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  duration: string;
  message: string;
}

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>();

  const services = [
    { value: 'recording', label: 'Recording Studio' },
    { value: 'mixing', label: 'Mixing & Mastering' },
    { value: 'live', label: 'Live Performance' },
    { value: 'rehearsal', label: 'Rehearsal Room' },
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', 
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const durations = [
    { value: '1', label: '1 Jam' },
    { value: '2', label: '2 Jam' },
    { value: '4', label: '4 Jam' },
    { value: '8', label: '8 Jam (Full Day)' },
  ];

  const isMobile = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/booking/redirect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong');
      }

      const result = await response.json();
      let url = '';

      if (isMobile()) {
        url = `https://wa.me/${result.phone}?text=${encodeURIComponent(result.message)}`;
        window.location.href = url;
      } else {
        // Try to open WhatsApp Desktop app first
        const appUrl = `whatsapp://send?phone=${result.phone}&text=${encodeURIComponent(result.message)}`;
        const webUrl = `https://web.whatsapp.com/send?phone=${result.phone}&text=${encodeURIComponent(result.message)}`;
        // Create a hidden iframe to try to open the app
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = appUrl;
        document.body.appendChild(iframe);
        // Fallback to WhatsApp Web after 2 seconds
        setTimeout(() => {
          document.body.removeChild(iframe);
          window.location.href = webUrl;
        }, 2000);
      }

      setIsSubmitted(true);
      reset();

    } catch (error: any) {
      setSubmitError(error.message || 'Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="card text-center">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Music className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Booking Berhasil!</h3>
        <p className="text-dark-300">
          Terima kasih telah memilih Aley Studio. Tim kami akan menghubungi Anda segera untuk konfirmasi.
        </p>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Booking Studio</h2>
        <p className="text-dark-300">
          Pilih layanan dan jadwal yang sesuai dengan kebutuhan Anda
        </p>
      </div>

      {submitError && (
        <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-lg text-center">
          <p>{submitError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              <User className="h-4 w-4 inline mr-2" />
              Nama Lengkap
            </label>
            <input
              type="text"
              {...register('name', { required: 'Nama wajib diisi' })}
              className="form-input"
              placeholder="Masukkan nama lengkap"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              <Mail className="h-4 w-4 inline mr-2" />
              Email
            </label>
            <input
              type="email"
              {...register('email', { 
                required: 'Email wajib diisi',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Format email tidak valid'
                }
              })}
              className="form-input"
              placeholder="contoh@email.com"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            <Phone className="h-4 w-4 inline mr-2" />
            Nomor Telepon
          </label>
          <input
            type="tel"
            {...register('phone', { required: 'Nomor telepon wajib diisi' })}
            className="form-input"
            placeholder="+62 812-3456-7890"
          />
          {errors.phone && (
            <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Service Selection */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            <Music className="h-4 w-4 inline mr-2" />
            Pilih Layanan
          </label>
          <select
            {...register('service', { required: 'Pilih layanan' })}
            className="form-select"
          >
            <option value="">Pilih layanan...</option>
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-red-400 text-sm mt-1">{errors.service.message}</p>
          )}
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              <Calendar className="h-4 w-4 inline mr-2" />
              Tanggal
            </label>
            <input
              type="date"
              {...register('date', { required: 'Pilih tanggal' })}
              className="form-input"
              min={new Date().toISOString().split('T')[0]}
            />
            {errors.date && (
              <p className="text-red-400 text-sm mt-1">{errors.date.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              <Clock className="h-4 w-4 inline mr-2" />
              Waktu Mulai
            </label>
            <select
              {...register('time', { required: 'Pilih waktu' })}
              className="form-select"
            >
              <option value="">Pilih waktu...</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {errors.time && (
              <p className="text-red-400 text-sm mt-1">{errors.time.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              <Clock className="h-4 w-4 inline mr-2" />
              Durasi
            </label>
            <select
              {...register('duration', { required: 'Pilih durasi' })}
              className="form-select"
            >
              <option value="">Pilih durasi...</option>
              {durations.map((duration) => (
                <option key={duration.value} value={duration.value}>
                  {duration.label}
                </option>
              ))}
            </select>
            {errors.duration && (
              <p className="text-red-400 text-sm mt-1">{errors.duration.message}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Catatan Tambahan
          </label>
          <textarea
            {...register('message')}
            rows={4}
            className="form-textarea"
            placeholder="Berikan detail tambahan tentang proyek Anda (opsional)"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="spinner mr-2"></div>
              Memproses Booking...
            </div>
          ) : (
            'Kirim Booking'
          )}
        </button>
      </form>
    </div>
  );
};

export default BookingForm; 