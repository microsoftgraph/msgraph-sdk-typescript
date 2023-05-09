import {deserializeIntoDataSource} from './deserializeIntoDataSource';
import {SourceType} from './sourceType';
import {UserSource} from './userSource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserSource(userSource: UserSource | undefined = {} as UserSource) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDataSource(userSource),
        "email": n => { userSource.email = n.getStringValue(); },
        "includedSources": n => { userSource.includedSources = n.getEnumValue<SourceType>(SourceType); },
        "siteWebUrl": n => { userSource.siteWebUrl = n.getStringValue(); },
    }
}
