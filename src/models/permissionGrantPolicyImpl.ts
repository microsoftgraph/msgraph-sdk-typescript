import {createPermissionGrantConditionSetFromDiscriminatorValue} from './createPermissionGrantConditionSetFromDiscriminatorValue';
import {PermissionGrantConditionSetImpl, PolicyBaseImpl} from './index';
import {PermissionGrantConditionSet} from './permissionGrantConditionSet';
import {PermissionGrantPolicy} from './permissionGrantPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PermissionGrantPolicyImpl extends PolicyBaseImpl implements PermissionGrantPolicy {
    /** Condition sets which are excluded in this permission grant policy. Automatically expanded on GET. */
    public excludes?: PermissionGrantConditionSet[] | undefined;
    /** Condition sets which are included in this permission grant policy. Automatically expanded on GET. */
    public includes?: PermissionGrantConditionSet[] | undefined;
    /**
     * Instantiates a new PermissionGrantPolicy and sets the default values.
     * @param permissionGrantPolicyParameterValue 
     */
    public constructor(permissionGrantPolicyParameterValue?: PermissionGrantPolicy | undefined) {
        super(permissionGrantPolicyParameterValue);
        const excludesArrValue: PermissionGrantConditionSetImpl[] = []; this.excludes?.forEach(element => {excludesArrValue.push(element instanceof PermissionGrantConditionSetImpl? element : new PermissionGrantConditionSetImpl(element));});
        this.excludes = excludesArrValue;
        const includesArrValue: PermissionGrantConditionSetImpl[] = []; this.includes?.forEach(element => {includesArrValue.push(element instanceof PermissionGrantConditionSetImpl? element : new PermissionGrantConditionSetImpl(element));});
        this.includes = includesArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "excludes": n => { this.excludes = n.getCollectionOfObjectValues<PermissionGrantConditionSetImpl>(createPermissionGrantConditionSetFromDiscriminatorValue); },
            "includes": n => { this.includes = n.getCollectionOfObjectValues<PermissionGrantConditionSetImpl>(createPermissionGrantConditionSetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.excludes && this.excludes.length != 0){        const excludesArrValue: PermissionGrantConditionSetImpl[] = []; this.excludes?.forEach(element => {excludesArrValue.push(element instanceof PermissionGrantConditionSetImpl? element : new PermissionGrantConditionSetImpl(element));});
            writer.writeCollectionOfObjectValues<PermissionGrantConditionSetImpl>("excludes", excludesArrValue);
        }
        if(this.includes && this.includes.length != 0){        const includesArrValue: PermissionGrantConditionSetImpl[] = []; this.includes?.forEach(element => {includesArrValue.push(element instanceof PermissionGrantConditionSetImpl? element : new PermissionGrantConditionSetImpl(element));});
            writer.writeCollectionOfObjectValues<PermissionGrantConditionSetImpl>("includes", includesArrValue);
        }
    };
}
