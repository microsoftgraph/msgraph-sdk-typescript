import {createGroupFromDiscriminatorValue} from '../createGroupFromDiscriminatorValue';
import type {Group} from '../group';
import {serializeGroup} from '../serializeGroup';
import {deserializeIntoDataSource} from './deserializeIntoDataSource';
import {SourceType} from './sourceType';
import type {UnifiedGroupSource} from './unifiedGroupSource';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedGroupSource(unifiedGroupSource: UnifiedGroupSource | undefined = {} as UnifiedGroupSource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDataSource(unifiedGroupSource),
        "group": n => { unifiedGroupSource.group = n.getObjectValue<Group>(createGroupFromDiscriminatorValue); },
        "includedSources": n => { unifiedGroupSource.includedSources = n.getEnumValue<SourceType>(SourceType); },
    }
}
