const BookingList = () => {
    return (
        <div>
            <div className="page-header">
                <h1>📅 Bookings</h1>
                <button className="btn btn-primary">+ New Booking</button>
            </div>

            {/* TODO: Fetch and display bookings from /api/bookings */}
            <div className="card">
                <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '2rem' }}>
                    No bookings yet. This page will be implemented by the team member responsible for bookings.
                </p>
            </div>
        </div>
    );
};

export default BookingList;
