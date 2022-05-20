import { Model } from ".";
import { DMMF } from "@prisma/generator-helper";
export declare function dmmfModelTransformer(models: Model[]): Model[];
export declare function dmmfEnumTransformer(enums: DMMF.DatamodelEnum[]): DMMF.DatamodelEnum[];