import { type ApplicationEnforcedRestrictionsSessionControl } from './applicationEnforcedRestrictionsSessionControl';
import { serializeConditionalAccessSessionControl } from './serializeConditionalAccessSessionControl';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeApplicationEnforcedRestrictionsSessionControl(writer: SerializationWriter, applicationEnforcedRestrictionsSessionControl: ApplicationEnforcedRestrictionsSessionControl | undefined = {} as ApplicationEnforcedRestrictionsSessionControl) : void {
        serializeConditionalAccessSessionControl(writer, applicationEnforcedRestrictionsSessionControl)
}
