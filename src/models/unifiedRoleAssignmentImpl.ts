import {AppScope} from './appScope';
import {createAppScopeFromDiscriminatorValue} from './createAppScopeFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createUnifiedRoleDefinitionFromDiscriminatorValue} from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {AppScopeImpl, DirectoryObjectImpl, EntityImpl, UnifiedRoleDefinitionImpl} from './index';
import {UnifiedRoleAssignment} from './unifiedRoleAssignment';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the roleManagement singleton. */
export class UnifiedRoleAssignmentImpl extends EntityImpl implements Parsable, UnifiedRoleAssignment {
    /** Details of the app specific scope when the assignment scope is app specific. Containment entity. */
    public appScope?: AppScope | undefined;
    /** Identifier of the app specific scope when the assignment scope is app specific. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. App scopes are scopes that are defined and understood by this application only.  For the entitlement management provider, use app scopes to specify a catalog, for example /AccessPackageCatalog/beedadfe-01d5-4025-910b-84abb9369997. */
    public appScopeId?: string | undefined;
    /** The condition property */
    public condition?: string | undefined;
    /** The directory object that is the scope of the assignment. Provided so that callers can get the directory object using $expand at the same time as getting the role assignment. Read-only. Supports $expand. */
    public directoryScope?: DirectoryObject | undefined;
    /** Identifier of the directory object representing the scope of the assignment. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. App scopes are scopes that are defined and understood by this application only. */
    public directoryScopeId?: string | undefined;
    /** The assigned principal. Provided so that callers can get the principal using $expand at the same time as getting the role assignment. Read-only. Supports $expand. */
    public principal?: DirectoryObject | undefined;
    /** Identifier of the principal to which the assignment is granted. Supports $filter (eq operator only). */
    public principalId?: string | undefined;
    /** The roleDefinition the assignment is for. Provided so that callers can get the role definition using $expand at the same time as getting the role assignment. roleDefinition.id will be auto expanded. Supports $expand. */
    public roleDefinition?: UnifiedRoleDefinition | undefined;
    /** Identifier of the unifiedRoleDefinition the assignment is for. Read-only. Supports $filter (eq operator only). */
    public roleDefinitionId?: string | undefined;
    /**
     * Instantiates a new unifiedRoleAssignment and sets the default values.
     * @param unifiedRoleAssignmentParameterValue 
     */
    public constructor(unifiedRoleAssignmentParameterValue?: UnifiedRoleAssignment | undefined) {
        super();
        this.appScope = unifiedRoleAssignmentParameterValue?.appScope ;
        this.appScopeId = unifiedRoleAssignmentParameterValue?.appScopeId ;
        this.condition = unifiedRoleAssignmentParameterValue?.condition ;
        this.directoryScope = unifiedRoleAssignmentParameterValue?.directoryScope ;
        this.directoryScopeId = unifiedRoleAssignmentParameterValue?.directoryScopeId ;
        this.principal = unifiedRoleAssignmentParameterValue?.principal ;
        this.principalId = unifiedRoleAssignmentParameterValue?.principalId ;
        this.roleDefinition = unifiedRoleAssignmentParameterValue?.roleDefinition ;
        this.roleDefinitionId = unifiedRoleAssignmentParameterValue?.roleDefinitionId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appScope": n => { this.appScope = n.getObjectValue<AppScopeImpl>(createAppScopeFromDiscriminatorValue); },
            "appScopeId": n => { this.appScopeId = n.getStringValue(); },
            "condition": n => { this.condition = n.getStringValue(); },
            "directoryScope": n => { this.directoryScope = n.getObjectValue<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "directoryScopeId": n => { this.directoryScopeId = n.getStringValue(); },
            "principal": n => { this.principal = n.getObjectValue<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "principalId": n => { this.principalId = n.getStringValue(); },
            "roleDefinition": n => { this.roleDefinition = n.getObjectValue<UnifiedRoleDefinitionImpl>(createUnifiedRoleDefinitionFromDiscriminatorValue); },
            "roleDefinitionId": n => { this.roleDefinitionId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appScope){
        writer.writeObjectValue<AppScopeImpl>("appScope", new AppScopeImpl(this.appScope));
        }
        if(this.appScopeId){
        writer.writeStringValue("appScopeId", this.appScopeId);
        }
        if(this.condition){
        writer.writeStringValue("condition", this.condition);
        }
        if(this.directoryScope){
        writer.writeObjectValue<DirectoryObjectImpl>("directoryScope", new DirectoryObjectImpl(this.directoryScope));
        }
        if(this.directoryScopeId){
        writer.writeStringValue("directoryScopeId", this.directoryScopeId);
        }
        if(this.principal){
        writer.writeObjectValue<DirectoryObjectImpl>("principal", new DirectoryObjectImpl(this.principal));
        }
        if(this.principalId){
        writer.writeStringValue("principalId", this.principalId);
        }
        if(this.roleDefinition){
        writer.writeObjectValue<UnifiedRoleDefinitionImpl>("roleDefinition", new UnifiedRoleDefinitionImpl(this.roleDefinition));
        }
        if(this.roleDefinitionId){
        writer.writeStringValue("roleDefinitionId", this.roleDefinitionId);
        }
    };
}
