import { createIdentitySetFromDiscriminatorValue } from './createIdentitySetFromDiscriminatorValue';
import { deserializeIntoOnenoteEntitySchemaObjectModel } from './deserializeIntoOnenoteEntitySchemaObjectModel';
import { type IdentitySet } from './identitySet';
import { type OnenoteEntityHierarchyModel } from './onenoteEntityHierarchyModel';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteEntityHierarchyModel(onenoteEntityHierarchyModel: OnenoteEntityHierarchyModel | undefined = {} as OnenoteEntityHierarchyModel) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOnenoteEntitySchemaObjectModel(onenoteEntityHierarchyModel),
        "createdBy": n => { onenoteEntityHierarchyModel.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "displayName": n => { onenoteEntityHierarchyModel.displayName = n.getStringValue(); },
        "lastModifiedBy": n => { onenoteEntityHierarchyModel.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { onenoteEntityHierarchyModel.lastModifiedDateTime = n.getDateValue(); },
    }
}
