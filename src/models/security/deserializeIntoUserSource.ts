import { deserializeIntoDataSource } from './deserializeIntoDataSource';
import { SourceType } from './sourceType';
import { type UserSource } from './userSource';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserSource(userSource: UserSource | undefined = {} as UserSource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDataSource(userSource),
        "email": n => { userSource.email = n.getStringValue(); },
        "includedSources": n => { userSource.includedSources = n.getCollectionOfEnumValues<SourceType>(SourceType); },
        "siteWebUrl": n => { userSource.siteWebUrl = n.getStringValue(); },
    }
}
