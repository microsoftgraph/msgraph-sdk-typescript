import {MediaConfig} from './mediaConfig';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMediaConfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : MediaConfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MediaConfig();
}
