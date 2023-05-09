import {Group} from '../group';
import {serializeGroup} from '../serializeGroup';
import {serializeDataSource} from './serializeDataSource';
import {SourceType} from './sourceType';
import {UnifiedGroupSource} from './unifiedGroupSource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedGroupSource(writer: SerializationWriter, unifiedGroupSource: UnifiedGroupSource | undefined = {} as UnifiedGroupSource) : void {
        serializeDataSource(writer, unifiedGroupSource)
        writer.writeObjectValue<Group>("group", unifiedGroupSource.group, serializeGroup);
        writer.writeEnumValue<SourceType>("includedSources", unifiedGroupSource.includedSources);
}
