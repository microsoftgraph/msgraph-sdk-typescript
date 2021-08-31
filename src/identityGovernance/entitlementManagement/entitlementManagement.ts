import {Entity} from '../../entity';
import {Approval} from '../appConsent/appConsentRequests/userConsentRequests/approval/approval';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class EntitlementManagement extends Entity implements Parsable {
    private _accessPackageAssignmentApprovals?: Approval[] | undefined;
    /**
     * Instantiates a new EntitlementManagement and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the accessPackageAssignmentApprovals property value. 
     * @returns a approval
     */
    public get accessPackageAssignmentApprovals() {
        return this._accessPackageAssignmentApprovals;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["accessPackageAssignmentApprovals", (o, n) => { (o as unknown as EntitlementManagement).accessPackageAssignmentApprovals = n.getCollectionOfObjectValues<Approval>(Approval); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Approval>("accessPackageAssignmentApprovals", this.accessPackageAssignmentApprovals);
    };
    /**
     * Sets the accessPackageAssignmentApprovals property value. 
     * @param value Value to set for the accessPackageAssignmentApprovals property.
     */
    public set accessPackageAssignmentApprovals(value: Approval[] | undefined) {
        this._accessPackageAssignmentApprovals = value;
    };
}
