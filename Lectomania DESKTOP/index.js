import express from "express";
import cors from "cors";
import { MercadoPagoConfig, Preference } from 'mercadopago';

// Configura MercadoPago con tu access token
const client = new MercadoPagoConfig({ accessToken: 'APP_USR-7340323035046238-072816-ad23925a09541acd1b8556b140ebaa43-1918542520' });

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Servidor de Lectomania funcionando");
});

app.post("/create_preference", async (req, res) => {
    try {
        const items = req.body.items.map(item => ({
            title: item.title,
            quantity: Number(item.quantity),
            unit_price: Number(item.unit_price),
            currency_id: "ARS",
        }));

        const body = {
            items: items,
            back_urls: {
                success: "https://tu-sitio-web.com/success",
                failure: "https://tu-sitio-web.com/failure",
                pending: "https://tu-sitio-web.com/pending",
            },
            auto_return: "approved",
        };

        const preference = new Preference(client);
        const result = await preference.create({ body });
        res.json({
            id: result.id,
        });
    } catch (error) {
        console.error("Error al crear la preferencia:", error);
        res.status(500).json({
            error: "Error al crear la preferencia de pago"
        });
    }
});

app.listen(port, () => {
    console.log(`Servidor de Lectomania corriendo en el puerto ${port}`);
});

