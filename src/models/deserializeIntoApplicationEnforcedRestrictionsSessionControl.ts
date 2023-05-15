import {ApplicationEnforcedRestrictionsSessionControl} from './applicationEnforcedRestrictionsSessionControl';
import {deserializeIntoConditionalAccessSessionControl} from './deserializeIntoConditionalAccessSessionControl';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplicationEnforcedRestrictionsSessionControl(applicationEnforcedRestrictionsSessionControl: ApplicationEnforcedRestrictionsSessionControl | undefined = {} as ApplicationEnforcedRestrictionsSessionControl) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConditionalAccessSessionControl(applicationEnforcedRestrictionsSessionControl),
    }
}
