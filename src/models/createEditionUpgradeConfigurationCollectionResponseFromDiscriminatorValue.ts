import {EditionUpgradeConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEditionUpgradeConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EditionUpgradeConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EditionUpgradeConfigurationCollectionResponse();
}
