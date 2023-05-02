import {FeatureTarget} from './featureTarget';
import {FeatureTargetType} from './featureTargetType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFeatureTarget(featureTarget: FeatureTarget | undefined = {} as FeatureTarget) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { featureTarget.id = n.getStringValue(); },
        "@odata.type": n => { featureTarget.odataType = n.getStringValue(); },
        "targetType": n => { featureTarget.targetType = n.getEnumValue<FeatureTargetType>(FeatureTargetType); },
    }
}
