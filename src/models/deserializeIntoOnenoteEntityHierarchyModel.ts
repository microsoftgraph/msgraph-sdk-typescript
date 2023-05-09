import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoOnenoteEntitySchemaObjectModel} from './deserializeIntoOnenoteEntitySchemaObjectModel';
import {IdentitySet} from './identitySet';
import {OnenoteEntityHierarchyModel} from './onenoteEntityHierarchyModel';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteEntityHierarchyModel(onenoteEntityHierarchyModel: OnenoteEntityHierarchyModel | undefined = {} as OnenoteEntityHierarchyModel) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOnenoteEntitySchemaObjectModel(onenoteEntityHierarchyModel),
        "createdBy": n => { onenoteEntityHierarchyModel.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "displayName": n => { onenoteEntityHierarchyModel.displayName = n.getStringValue(); },
        "lastModifiedBy": n => { onenoteEntityHierarchyModel.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { onenoteEntityHierarchyModel.lastModifiedDateTime = n.getDateValue(); },
    }
}
