import { serializeDataSource } from './serializeDataSource';
import { SourceType } from './sourceType';
import { type UserSource } from './userSource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserSource(writer: SerializationWriter, userSource: UserSource | undefined = {} as UserSource) : void {
        serializeDataSource(writer, userSource)
        writer.writeStringValue("email", userSource.email);
        writer.writeEnumValue<SourceType[]>("includedSources", userSource.includedSources);
        writer.writeStringValue("siteWebUrl", userSource.siteWebUrl);
}
