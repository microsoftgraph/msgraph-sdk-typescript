import {deserializeIntoSearchSettings} from './deserializeIntoSearchSettings';
import {SearchSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSearchSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSearchSettings;
}
