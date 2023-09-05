import { type FeatureTarget } from './featureTarget';
import { FeatureTargetType } from './featureTargetType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFeatureTarget(writer: SerializationWriter, featureTarget: FeatureTarget | undefined = {} as FeatureTarget) : void {
        writer.writeStringValue("id", featureTarget.id);
        writer.writeStringValue("@odata.type", featureTarget.odataType);
        writer.writeEnumValue<FeatureTargetType>("targetType", featureTarget.targetType);
        writer.writeAdditionalData(featureTarget.additionalData);
}
