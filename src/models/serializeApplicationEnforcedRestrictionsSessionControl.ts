import {ApplicationEnforcedRestrictionsSessionControl} from './applicationEnforcedRestrictionsSessionControl';
import {serializeConditionalAccessSessionControl} from './serializeConditionalAccessSessionControl';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplicationEnforcedRestrictionsSessionControl(applicationEnforcedRestrictionsSessionControl: ApplicationEnforcedRestrictionsSessionControl | undefined = {} as ApplicationEnforcedRestrictionsSessionControl, writer: SerializationWriter) : void {
        serializeConditionalAccessSessionControl(writer, applicationEnforcedRestrictionsSessionControl)
}
