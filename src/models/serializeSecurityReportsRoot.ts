import {SecurityReportsRoot} from './securityReportsRoot';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecurityReportsRoot(writer: SerializationWriter, securityReportsRoot: SecurityReportsRoot | undefined = {} as SecurityReportsRoot) : void {
        serializeEntity(writer, securityReportsRoot)
}
