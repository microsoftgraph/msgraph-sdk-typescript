import {IdentitySet} from './identitySet';
import {NotebookLinks} from './notebookLinks';
import {OnenoteUserRole} from './onenoteUserRole';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CopyNotebookModel extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The createdBy property */
    createdBy?: string | undefined;
    /** The createdByIdentity property */
    createdByIdentity?: IdentitySet | undefined;
    /** The createdTime property */
    createdTime?: Date | undefined;
    /** The id property */
    id?: string | undefined;
    /** The isDefault property */
    isDefault?: boolean | undefined;
    /** The isShared property */
    isShared?: boolean | undefined;
    /** The lastModifiedBy property */
    lastModifiedBy?: string | undefined;
    /** The lastModifiedByIdentity property */
    lastModifiedByIdentity?: IdentitySet | undefined;
    /** The lastModifiedTime property */
    lastModifiedTime?: Date | undefined;
    /** The links property */
    links?: NotebookLinks | undefined;
    /** The name property */
    name?: string | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The sectionGroupsUrl property */
    sectionGroupsUrl?: string | undefined;
    /** The sectionsUrl property */
    sectionsUrl?: string | undefined;
    /** The self property */
    self?: string | undefined;
    /** The userRole property */
    userRole?: OnenoteUserRole | undefined;
}
