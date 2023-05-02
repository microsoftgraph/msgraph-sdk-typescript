import {ApplicationEnforcedRestrictionsSessionControl} from './applicationEnforcedRestrictionsSessionControl';
import {serializeConditionalAccessSessionControl} from './serializeConditionalAccessSessionControl';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplicationEnforcedRestrictionsSessionControl(writer: SerializationWriter, applicationEnforcedRestrictionsSessionControl: ApplicationEnforcedRestrictionsSessionControl | undefined = {} as ApplicationEnforcedRestrictionsSessionControl) : void {
        serializeConditionalAccessSessionControl(writer, applicationEnforcedRestrictionsSessionControl)
}
