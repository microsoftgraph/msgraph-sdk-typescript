import {AppScope} from './appScope';
import {createAppScopeFromDiscriminatorValue} from './createAppScopeFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createUnifiedRoleDefinitionFromDiscriminatorValue} from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {AppScopeImpl, DirectoryObjectImpl, EntityImpl, UnifiedRoleDefinitionImpl} from './index';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {UnifiedRoleScheduleBase} from './unifiedRoleScheduleBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the roleManagement singleton. */
export class UnifiedRoleScheduleBaseImpl extends EntityImpl implements Parsable, UnifiedRoleScheduleBase {
    /** Read-only property with details of the app specific scope when the assignment scope is app specific. Containment entity. */
    public appScope?: AppScope | undefined;
    /** Identifier of the app-specific scope when the assignment scope is app-specific. The scope of an assignment determines the set of resources for which the principal has been granted access. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units or all users. */
    public appScopeId?: string | undefined;
    /** Time that the schedule was created. */
    public createdDateTime?: Date | undefined;
    /** Identifier of the roleAssignmentScheduleRequest that created this schedule. */
    public createdUsing?: string | undefined;
    /** Property referencing the directory object that is the scope of the assignment. Provided so that callers can get the directory object using $expand at the same time as getting the role assignment. Read-only. */
    public directoryScope?: DirectoryObject | undefined;
    /** Identifier of the directory object representing the scope of the assignment. The scope of an assignment determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only. */
    public directoryScopeId?: string | undefined;
    /** Last time the schedule was updated. */
    public modifiedDateTime?: Date | undefined;
    /** Property referencing the principal that is getting a role assignment through the request. Provided so that callers can get the principal using $expand at the same time as getting the role assignment. Read-only. */
    public principal?: DirectoryObject | undefined;
    /** Identifier of the principal to which the assignment is being granted to. Supports $filter (eq). */
    public principalId?: string | undefined;
    /** Property indicating the roleDefinition the assignment is for. Provided so that callers can get the role definition using $expand at the same time as getting the role assignment. roleDefinition.Id will be auto expanded. */
    public roleDefinition?: UnifiedRoleDefinition | undefined;
    /** Identifier of the unifiedRoleDefinition the assignment is for. Read only. Supports $filter (eq). */
    public roleDefinitionId?: string | undefined;
    /** Status for the roleAssignmentSchedule. It can include state related messages like Provisioned, Revoked, Pending Provisioning, and Pending Approval. Supports $filter (eq). */
    public status?: string | undefined;
    /**
     * Instantiates a new unifiedRoleScheduleBase and sets the default values.
     * @param unifiedRoleScheduleBaseParameterValue 
     */
    public constructor(unifiedRoleScheduleBaseParameterValue?: UnifiedRoleScheduleBase | undefined) {
        super();
        this.appScope = unifiedRoleScheduleBaseParameterValue?.appScope ;
        this.appScopeId = unifiedRoleScheduleBaseParameterValue?.appScopeId ;
        this.createdDateTime = unifiedRoleScheduleBaseParameterValue?.createdDateTime ;
        this.createdUsing = unifiedRoleScheduleBaseParameterValue?.createdUsing ;
        this.directoryScope = unifiedRoleScheduleBaseParameterValue?.directoryScope ;
        this.directoryScopeId = unifiedRoleScheduleBaseParameterValue?.directoryScopeId ;
        this.modifiedDateTime = unifiedRoleScheduleBaseParameterValue?.modifiedDateTime ;
        this.principal = unifiedRoleScheduleBaseParameterValue?.principal ;
        this.principalId = unifiedRoleScheduleBaseParameterValue?.principalId ;
        this.roleDefinition = unifiedRoleScheduleBaseParameterValue?.roleDefinition ;
        this.roleDefinitionId = unifiedRoleScheduleBaseParameterValue?.roleDefinitionId ;
        this.status = unifiedRoleScheduleBaseParameterValue?.status ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appScope": n => { this.appScope = n.getObjectValue<AppScopeImpl>(createAppScopeFromDiscriminatorValue); },
            "appScopeId": n => { this.appScopeId = n.getStringValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "createdUsing": n => { this.createdUsing = n.getStringValue(); },
            "directoryScope": n => { this.directoryScope = n.getObjectValue<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "directoryScopeId": n => { this.directoryScopeId = n.getStringValue(); },
            "modifiedDateTime": n => { this.modifiedDateTime = n.getDateValue(); },
            "principal": n => { this.principal = n.getObjectValue<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "principalId": n => { this.principalId = n.getStringValue(); },
            "roleDefinition": n => { this.roleDefinition = n.getObjectValue<UnifiedRoleDefinitionImpl>(createUnifiedRoleDefinitionFromDiscriminatorValue); },
            "roleDefinitionId": n => { this.roleDefinitionId = n.getStringValue(); },
            "status": n => { this.status = n.getStringValue(); },
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
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.createdUsing){
        writer.writeStringValue("createdUsing", this.createdUsing);
        }
        if(this.directoryScope){
        writer.writeObjectValue<DirectoryObjectImpl>("directoryScope", new DirectoryObjectImpl(this.directoryScope));
        }
        if(this.directoryScopeId){
        writer.writeStringValue("directoryScopeId", this.directoryScopeId);
        }
        if(this.modifiedDateTime){
        writer.writeDateValue("modifiedDateTime", this.modifiedDateTime);
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
        if(this.status){
        writer.writeStringValue("status", this.status);
        }
    };
}
