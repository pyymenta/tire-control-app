import { TireModel } from '../models/TireModel';
import { TireSize } from '../models/TireSize';
import { TireType } from '../models/TireType';
import { TireBrand } from '../models/TireBrand';

export class Tire{
    id: number;
    dot: string;
    code: string;
    tireModel: TireModel;
    tireSize: TireSize;
    tireType: TireType;
    tireBrand: TireBrand;

    constructor(id: number, dot: string, code: string, tireModel: TireModel, TireSize: TireSize,
    tireType: TireType, tireBrand: TireBrand){
        this.id = id;
        this.dot = dot;
        this.code = code;
        this.tireModel = tireModel;
        this.tireSize = TireSize;
        this.tireType = tireType;
        this.tireBrand = tireBrand;    
    }
}
