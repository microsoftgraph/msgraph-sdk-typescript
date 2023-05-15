import {CopyNotebookModel} from './copyNotebookModel';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createNotebookLinksFromDiscriminatorValue} from './createNotebookLinksFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {NotebookLinks} from './notebookLinks';
import {OnenoteUserRole} from './onenoteUserRole';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeNotebookLinks} from './serializeNotebookLinks';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCopyNotebookModel(copyNotebookModel: CopyNotebookModel | undefined = {} as CopyNotebookModel) : Record<string, (node: ParseNode) => void> {
    return {
        "createdBy": n => { copyNotebookModel.createdBy = n.getStringValue(); },
        "createdByIdentity": n => { copyNotebookModel.createdByIdentity = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "createdTime": n => { copyNotebookModel.createdTime = n.getDateValue(); },
        "id": n => { copyNotebookModel.id = n.getStringValue(); },
        "isDefault": n => { copyNotebookModel.isDefault = n.getBooleanValue(); },
        "isShared": n => { copyNotebookModel.isShared = n.getBooleanValue(); },
        "lastModifiedBy": n => { copyNotebookModel.lastModifiedBy = n.getStringValue(); },
        "lastModifiedByIdentity": n => { copyNotebookModel.lastModifiedByIdentity = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "lastModifiedTime": n => { copyNotebookModel.lastModifiedTime = n.getDateValue(); },
        "links": n => { copyNotebookModel.links = n.getObjectValue<NotebookLinks>(createNotebookLinksFromDiscriminatorValue); },
        "name": n => { copyNotebookModel.name = n.getStringValue(); },
        "@odata.type": n => { copyNotebookModel.odataType = n.getStringValue(); },
        "sectionGroupsUrl": n => { copyNotebookModel.sectionGroupsUrl = n.getStringValue(); },
        "sectionsUrl": n => { copyNotebookModel.sectionsUrl = n.getStringValue(); },
        "self": n => { copyNotebookModel.self = n.getStringValue(); },
        "userRole": n => { copyNotebookModel.userRole = n.getEnumValue<OnenoteUserRole>(OnenoteUserRole); },
    }
}
