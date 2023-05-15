import {deserializeIntoEntity} from './deserializeIntoEntity';
import {SecurityReportsRoot} from './securityReportsRoot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecurityReportsRoot(securityReportsRoot: SecurityReportsRoot | undefined = {} as SecurityReportsRoot) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(securityReportsRoot),
    }
}
