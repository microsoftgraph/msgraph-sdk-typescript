import {AppScope} from './appScope';
import {createAppScopeFromDiscriminatorValue} from './createAppScopeFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createUnifiedRoleDefinitionFromDiscriminatorValue} from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {AppScopeImpl, DirectoryObjectImpl, EntityImpl, UnifiedRoleDefinitionImpl} from './index';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {UnifiedRoleScheduleInstanceBase} from './unifiedRoleScheduleInstanceBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the roleManagement singleton. */
export class UnifiedRoleScheduleInstanceBaseImpl extends EntityImpl implements UnifiedRoleScheduleInstanceBase {
    /** Read-only property with details of the app-specific scope when the assignment or role eligibility is scoped to an app. Nullable. */
    public appScope?: AppScope | undefined;
    /** Identifier of the app-specific scope when the assignment or role eligibility is scoped to an app. The scope of an assignment or role eligibility determines the set of resources for which the principal has been granted access. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units. */
    public appScopeId?: string | undefined;
    /** The directory object that is the scope of the assignment or role eligibility. Read-only. */
    public directoryScope?: DirectoryObject | undefined;
    /** Identifier of the directory object representing the scope of the assignment or role eligibility. The scope of an assignment or role eligibility determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only. */
    public directoryScopeId?: string | undefined;
    /** The principal that's getting a role assignment or role eligibility through the request. */
    public principal?: DirectoryObject | undefined;
    /** Identifier of the principal that has been granted the role assignment or that's eligible for a role. */
    public principalId?: string | undefined;
    /** Detailed information for the roleDefinition object that is referenced through the roleDefinitionId property. */
    public roleDefinition?: UnifiedRoleDefinition | undefined;
    /** Identifier of the unifiedRoleDefinition object that is being assigned to the principal or that the principal is eligible for. */
    public roleDefinitionId?: string | undefined;
    /**
     * Instantiates a new unifiedRoleScheduleInstanceBase and sets the default values.
     * @param unifiedRoleScheduleInstanceBaseParameterValue 
     */
    public constructor(unifiedRoleScheduleInstanceBaseParameterValue?: UnifiedRoleScheduleInstanceBase | undefined) {
        super(unifiedRoleScheduleInstanceBaseParameterValue);
        this.appScope = unifiedRoleScheduleInstanceBaseParameterValue?.appScope;
        this.appScopeId = unifiedRoleScheduleInstanceBaseParameterValue?.appScopeId;
        this.directoryScope = unifiedRoleScheduleInstanceBaseParameterValue?.directoryScope;
        this.directoryScopeId = unifiedRoleScheduleInstanceBaseParameterValue?.directoryScopeId;
        this.principal = unifiedRoleScheduleInstanceBaseParameterValue?.principal;
        this.principalId = unifiedRoleScheduleInstanceBaseParameterValue?.principalId;
        this.roleDefinition = unifiedRoleScheduleInstanceBaseParameterValue?.roleDefinition;
        this.roleDefinitionId = unifiedRoleScheduleInstanceBaseParameterValue?.roleDefinitionId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appScope": n => { this.appScope = n.getObjectValue<AppScopeImpl>(createAppScopeFromDiscriminatorValue); },
            "appScopeId": n => { this.appScopeId = n.getStringValue(); },
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
