import './styles.css'
import icon from '../../assets/img/notification-icon.svg'
import NotificationButton from '../NotificationButton'

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2>Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" />
                </div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" />
                </div>
                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="show992px">ID</th>
                                <th className="show576px">Data</th>
                                <th>Vendedor</th>
                                <th className="show992px">Visitas</th>
                                <th className="show992px">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="show992px">#341</td>
                                <td className="show576px">28/06/2022</td>
                                <td>Anakin</td>
                                <td className="show992px">15</td>
                                <td className="show992px">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992px">#341</td>
                                <td className="show576px">28/06/2022</td>
                                <td>Bilbo</td>
                                <td className="show992px">15</td>
                                <td className="show992px">11</td>
                                <td>R$ 985800.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992px">#341</td>
                                <td className="show576px">28/06/2022</td>
                                <td>Anakin</td>
                                <td className="show992px">15</td>
                                <td className="show992px">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SalesCard