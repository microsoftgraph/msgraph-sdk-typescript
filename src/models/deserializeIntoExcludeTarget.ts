import { AuthenticationMethodTargetType } from './authenticationMethodTargetType';
import { type ExcludeTarget } from './excludeTarget';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoExcludeTarget(excludeTarget: ExcludeTarget | undefined = {} as ExcludeTarget) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { excludeTarget.id = n.getStringValue(); },
        "@odata.type": n => { excludeTarget.odataType = n.getStringValue(); },
        "targetType": n => { excludeTarget.targetType = n.getEnumValue<AuthenticationMethodTargetType>(AuthenticationMethodTargetType); },
    }
}
