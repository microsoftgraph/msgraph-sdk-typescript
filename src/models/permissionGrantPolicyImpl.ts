import {createPermissionGrantConditionSetFromDiscriminatorValue} from './createPermissionGrantConditionSetFromDiscriminatorValue';
import {PermissionGrantConditionSetImpl, PolicyBaseImpl} from './index';
import {PermissionGrantConditionSet} from './permissionGrantConditionSet';
import {PermissionGrantPolicy} from './permissionGrantPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PermissionGrantPolicyImpl extends PolicyBaseImpl implements PermissionGrantPolicy {
    /** Condition sets which are excluded in this permission grant policy. Automatically expanded on GET. */
    private _excludes?: PermissionGrantConditionSet[] | undefined;
    /** Condition sets which are included in this permission grant policy. Automatically expanded on GET. */
    private _includes?: PermissionGrantConditionSet[] | undefined;
    /**
     * Instantiates a new PermissionGrantPolicy and sets the default values.
     * @param permissionGrantPolicyParameterValue 
     */
    public constructor(permissionGrantPolicyParameterValue?: PermissionGrantPolicy | undefined) {
        super(permissionGrantPolicyParameterValue);
        this._excludes = permissionGrantPolicyParameterValue?.excludes;
        this._includes = permissionGrantPolicyParameterValue?.includes;
    };
    /**
     * Gets the excludes property value. Condition sets which are excluded in this permission grant policy. Automatically expanded on GET.
     * @returns a PermissionGrantConditionSetInterface
     */
    public get excludes() {
        return this._excludes;
    };
    /**
     * Sets the excludes property value. Condition sets which are excluded in this permission grant policy. Automatically expanded on GET.
     * @param value Value to set for the excludes property.
     */
    public set excludes(value: PermissionGrantConditionSet[] | undefined) {
        if(value) {
            const excludesArrValue: PermissionGrantConditionSetImpl[] = [];
            this.excludes?.forEach(element => {
                excludesArrValue.push((element instanceof PermissionGrantConditionSetImpl? element as PermissionGrantConditionSetImpl:new PermissionGrantConditionSetImpl(element)));
            });
            this._excludes = excludesArrValue;
        }
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
     * Gets the includes property value. Condition sets which are included in this permission grant policy. Automatically expanded on GET.
     * @returns a PermissionGrantConditionSetInterface
     */
    public get includes() {
        return this._includes;
    };
    /**
     * Sets the includes property value. Condition sets which are included in this permission grant policy. Automatically expanded on GET.
     * @param value Value to set for the includes property.
     */
    public set includes(value: PermissionGrantConditionSet[] | undefined) {
        if(value) {
            const includesArrValue: PermissionGrantConditionSetImpl[] = [];
            this.includes?.forEach(element => {
                includesArrValue.push((element instanceof PermissionGrantConditionSetImpl? element as PermissionGrantConditionSetImpl:new PermissionGrantConditionSetImpl(element)));
            });
            this._includes = includesArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.excludes && this.excludes.length != 0){        const excludesArrValue: PermissionGrantConditionSetImpl[] = [];
        this.excludes?.forEach(element => {
            excludesArrValue.push((element instanceof PermissionGrantConditionSetImpl? element as PermissionGrantConditionSetImpl:new PermissionGrantConditionSetImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PermissionGrantConditionSetImpl>("excludes", excludesArrValue);
        }
        if(this.includes && this.includes.length != 0){        const includesArrValue: PermissionGrantConditionSetImpl[] = [];
        this.includes?.forEach(element => {
            includesArrValue.push((element instanceof PermissionGrantConditionSetImpl? element as PermissionGrantConditionSetImpl:new PermissionGrantConditionSetImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PermissionGrantConditionSetImpl>("includes", includesArrValue);
        }
    };
}
