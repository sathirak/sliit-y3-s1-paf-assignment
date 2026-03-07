const TicketList = () => {
    return (
        <div>
            <div className="page-header">
                <h1>🎫 Tickets</h1>
                <button className="btn btn-primary">+ Create Ticket</button>
            </div>

            {/* TODO: Fetch and display tickets from /api/tickets */}
            <div className="card">
                <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '2rem' }}>
                    No tickets yet. This page will be implemented by the team member responsible for tickets.
                </p>
            </div>
        </div>
    );
};

export default TicketList;
