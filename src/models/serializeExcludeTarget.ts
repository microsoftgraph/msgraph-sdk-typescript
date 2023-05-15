import {AuthenticationMethodTargetType} from './authenticationMethodTargetType';
import {ExcludeTarget} from './excludeTarget';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExcludeTarget(writer: SerializationWriter, excludeTarget: ExcludeTarget | undefined = {} as ExcludeTarget) : void {
        writer.writeStringValue("id", excludeTarget.id);
        writer.writeStringValue("@odata.type", excludeTarget.odataType);
        writer.writeEnumValue<AuthenticationMethodTargetType>("targetType", excludeTarget.targetType);
        writer.writeAdditionalData(excludeTarget.additionalData);
}
