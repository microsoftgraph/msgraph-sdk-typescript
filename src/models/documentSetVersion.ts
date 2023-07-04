import {DocumentSetVersionItem} from './documentSetVersionItem';
import {IdentitySet} from './identitySet';
import {ListItemVersion} from './listItemVersion';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DocumentSetVersion extends ListItemVersion, Parsable {
    /**
     * Comment about the captured version.
     */
    comment?: string | undefined;
    /**
     * User who captured the version.
     */
    createdBy?: IdentitySet | undefined;
    /**
     * Date and time when this version was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * Items within the document set that are captured as part of this version.
     */
    items?: DocumentSetVersionItem[] | undefined;
    /**
     * If true, minor versions of items are also captured; otherwise, only major versions will be captured. Default value is false.
     */
    shouldCaptureMinorVersion?: boolean | undefined;
}
