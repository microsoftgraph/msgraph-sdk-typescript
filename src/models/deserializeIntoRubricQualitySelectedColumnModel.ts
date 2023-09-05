import { type RubricQualitySelectedColumnModel } from './rubricQualitySelectedColumnModel';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRubricQualitySelectedColumnModel(rubricQualitySelectedColumnModel: RubricQualitySelectedColumnModel | undefined = {} as RubricQualitySelectedColumnModel) : Record<string, (node: ParseNode) => void> {
    return {
        "columnId": n => { rubricQualitySelectedColumnModel.columnId = n.getStringValue(); },
        "@odata.type": n => { rubricQualitySelectedColumnModel.odataType = n.getStringValue(); },
        "qualityId": n => { rubricQualitySelectedColumnModel.qualityId = n.getStringValue(); },
    }
}
