import { type Group } from '../group';
import { serializeGroup } from '../serializeGroup';
import { serializeDataSource } from './serializeDataSource';
import { SourceType } from './sourceType';
import { type UnifiedGroupSource } from './unifiedGroupSource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUnifiedGroupSource(writer: SerializationWriter, unifiedGroupSource: UnifiedGroupSource | undefined = {} as UnifiedGroupSource) : void {
        serializeDataSource(writer, unifiedGroupSource)
        writer.writeObjectValue<Group>("group", unifiedGroupSource.group, serializeGroup);
        writer.writeEnumValue<SourceType[]>("includedSources", unifiedGroupSource.includedSources);
}
