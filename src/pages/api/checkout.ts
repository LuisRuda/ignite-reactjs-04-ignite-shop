import { NextApiRequest, NextApiResponse } from "next";

import { stripe } from "../../lib/stripe";

export default async function handles(req: NextApiRequest, res: NextApiResponse) {
    const priceId = "price_1M2gW8APZvCLBeGGkDTJA7z1";

    const sucessUrl = `${process.env.NEXT_URL}/succees`;
    const cancelUrl = `${process.env.NEXT_URL}/`;

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: sucessUrl,
        cancel_url: cancelUrl,
        mode: "payment",
        line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ]
    });

    return res.status(201).json({
        checkoutUrl: checkoutSession.url
    });
}