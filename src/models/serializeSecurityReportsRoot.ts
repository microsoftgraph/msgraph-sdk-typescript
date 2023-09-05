import { type SecurityReportsRoot } from './securityReportsRoot';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSecurityReportsRoot(writer: SerializationWriter, securityReportsRoot: SecurityReportsRoot | undefined = {} as SecurityReportsRoot) : void {
        serializeEntity(writer, securityReportsRoot)
}
