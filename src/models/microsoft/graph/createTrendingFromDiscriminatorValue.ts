import {Trending} from './trending';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTrendingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Trending {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Trending();
}
