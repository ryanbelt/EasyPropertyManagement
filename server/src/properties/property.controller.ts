import * as express from 'express';

import { PropertyService } from './property.service';

const propertyService = new PropertyService();

const controller = express.Router();

controller.post('/', async (req, res) => {
  const query = req.body;
  const properties = await propertyService.listProperties(query, req.query.offset, req.query.limit);
  res.send(properties);
});

controller.get('/:id', async (req, res)=>{
  let porpertyId = req.params.id;
  const property = await propertyService.findProperty(porpertyId);
  res.send(property)
})

export { controller as PropertyController };
