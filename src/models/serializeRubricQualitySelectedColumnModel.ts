import {RubricQualitySelectedColumnModel} from './rubricQualitySelectedColumnModel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRubricQualitySelectedColumnModel(writer: SerializationWriter, rubricQualitySelectedColumnModel: RubricQualitySelectedColumnModel | undefined = {} as RubricQualitySelectedColumnModel) : void {
        writer.writeStringValue("columnId", rubricQualitySelectedColumnModel.columnId);
        writer.writeStringValue("@odata.type", rubricQualitySelectedColumnModel.odataType);
        writer.writeStringValue("qualityId", rubricQualitySelectedColumnModel.qualityId);
        writer.writeAdditionalData(rubricQualitySelectedColumnModel.additionalData);
}
