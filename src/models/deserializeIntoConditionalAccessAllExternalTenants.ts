import {ConditionalAccessAllExternalTenants} from './conditionalAccessAllExternalTenants';
import {deserializeIntoConditionalAccessExternalTenants} from './deserializeIntoConditionalAccessExternalTenants';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessAllExternalTenants(conditionalAccessAllExternalTenants: ConditionalAccessAllExternalTenants | undefined = {} as ConditionalAccessAllExternalTenants) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConditionalAccessExternalTenants(conditionalAccessAllExternalTenants),
    }
}
