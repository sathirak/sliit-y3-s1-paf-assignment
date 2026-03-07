const FacilitiesList = () => {
    return (
        <div>
            <div className="page-header">
                <h1>🏢 Facilities</h1>
                <button className="btn btn-primary">+ Add Facility</button>
            </div>

            {/* TODO: Fetch and display facilities from /api/facilities */}
            <div className="card">
                <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '2rem' }}>
                    No facilities yet. This page will be implemented by the team member responsible for facilities.
                </p>
            </div>
        </div>
    );
};

export default FacilitiesList;
