//Function to get the order status and return a JSX element with appropriate styling

export function getOrderStatus(status) {
    // Switch statement to handle different order statuses
    switch (status) {
        case 'PLACED':
            // Styling for the 'PLACED' status
            return (
                <span className="capitalize py-1 px-2 rounded-md text-sm text-sky-600 bg-sky-200">
                    {status.replaceAll('_', ' ').toUpperCase()}
                </span>
            )
        case 'CONFIRMED':
            // Styling for the 'CONFIRMED' status
            return (
                <span className="capitalize py-1 px-2 rounded-md text-sm text-orange-600 bg-orange-200">
                    {status.replaceAll('_', ' ').toUpperCase()}
                </span>
            )
        case 'SHIPPED':
            // Styling for the 'SHIPPED' status
            return (
                <span className="capitalize py-1 px-2 rounded-md text-sm text-teal-600 bg-teal-200">
                    {status.replaceAll('_', ' ').toUpperCase()}
                </span>
            )
        case 'OUT_FOR_DELIVERY':
            // Styling for the 'OUT_FOR_DELIVERY' status
            return (
                <span className="capitalize py-1 px-2 rounded-md text-sm text-yellow-600 bg-yellow-200">
                    {status.replaceAll('_', ' ').toUpperCase()}
                </span>
            )
        case 'DELIVERED':
            // Styling for the 'DELIVERED' status
            return (
                <span className="capitalize py-1 px-2 rounded-md text-sm text-green-600 bg-green-200">
                    {status.replaceAll('_', ' ').toUpperCase()}
                </span>
            )
        default:
            // Default styling for other statuses
            return (
                <span className="capitalize py-1 px-2 rounded-md text-sm text-gray-600 bg-gray-300">
                    {status.replaceAll('_', ' ').toUpperCase()}
                </span>
            )
    }
}