import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type SecurityReportsRoot } from './securityReportsRoot';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSecurityReportsRoot(securityReportsRoot: SecurityReportsRoot | undefined = {} as SecurityReportsRoot) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(securityReportsRoot),
    }
}
