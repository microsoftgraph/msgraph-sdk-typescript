import type {ConditionalAccessAllExternalTenants} from './conditionalAccessAllExternalTenants';
import {deserializeIntoConditionalAccessExternalTenants} from './deserializeIntoConditionalAccessExternalTenants';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessAllExternalTenants(conditionalAccessAllExternalTenants: ConditionalAccessAllExternalTenants | undefined = {} as ConditionalAccessAllExternalTenants) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConditionalAccessExternalTenants(conditionalAccessAllExternalTenants),
    }
}
