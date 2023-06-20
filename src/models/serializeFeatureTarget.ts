import {FeatureTarget} from './featureTarget';
import {FeatureTargetType} from './featureTargetType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFeatureTarget(featureTarget: FeatureTarget | undefined = {} as FeatureTarget, writer: SerializationWriter) : void {
        writer.writeStringValue("id", featureTarget.id);
        writer.writeStringValue("@odata.type", featureTarget.odataType);
        writer.writeEnumValue<FeatureTargetType>("targetType", featureTarget.targetType);
        writer.writeAdditionalData(featureTarget.additionalData);
}
