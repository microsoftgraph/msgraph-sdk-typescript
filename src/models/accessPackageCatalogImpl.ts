import {AccessPackage} from './accessPackage';
import {AccessPackageCatalog} from './accessPackageCatalog';
import {AccessPackageCatalogState} from './accessPackageCatalogState';
import {AccessPackageCatalogType} from './accessPackageCatalogType';
import {createAccessPackageFromDiscriminatorValue} from './createAccessPackageFromDiscriminatorValue';
import {AccessPackageImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class AccessPackageCatalogImpl extends EntityImpl implements AccessPackageCatalog, Parsable {
    /** The access packages in this catalog. Read-only. Nullable. Supports $expand. */
    public accessPackages?: AccessPackage[] | undefined;
    /** One of UserManaged or ServiceDefault. */
    public catalogType?: AccessPackageCatalogType | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    public createdDateTime?: Date | undefined;
    /** The description of the access package catalog. */
    public description?: string | undefined;
    /** The display name of the access package catalog. Supports $filter (eq, contains). */
    public displayName?: string | undefined;
    /** Whether the access packages in this catalog can be requested by users outside of the tenant. */
    public isExternallyVisible?: boolean | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    public modifiedDateTime?: Date | undefined;
    /** Has the value published if the access packages are available for management. The possible values are: unpublished, published, unknownFutureValue. */
    public state?: AccessPackageCatalogState | undefined;
    /**
     * Instantiates a new accessPackageCatalog and sets the default values.
     * @param accessPackageCatalogParameterValue 
     */
    public constructor(accessPackageCatalogParameterValue?: AccessPackageCatalog | undefined) {
        super();
        this.accessPackages = accessPackageCatalogParameterValue?.accessPackages ;
        this.catalogType = accessPackageCatalogParameterValue?.catalogType ;
        this.createdDateTime = accessPackageCatalogParameterValue?.createdDateTime ;
        this.description = accessPackageCatalogParameterValue?.description ;
        this.displayName = accessPackageCatalogParameterValue?.displayName ;
        this.isExternallyVisible = accessPackageCatalogParameterValue?.isExternallyVisible ;
        this.modifiedDateTime = accessPackageCatalogParameterValue?.modifiedDateTime ;
        this.state = accessPackageCatalogParameterValue?.state ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accessPackages": n => { this.accessPackages = n.getCollectionOfObjectValues<AccessPackageImpl>(createAccessPackageFromDiscriminatorValue); },
            "catalogType": n => { this.catalogType = n.getEnumValue<AccessPackageCatalogType>(AccessPackageCatalogType); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "isExternallyVisible": n => { this.isExternallyVisible = n.getBooleanValue(); },
            "modifiedDateTime": n => { this.modifiedDateTime = n.getDateValue(); },
            "state": n => { this.state = n.getEnumValue<AccessPackageCatalogState>(AccessPackageCatalogState); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.accessPackages && this.accessPackages.length != 0){        const accessPackagesArrValue: AccessPackageImpl[] = []; this.accessPackages?.forEach(element => {accessPackagesArrValue.push(new AccessPackageImpl(element));});
        writer.writeCollectionOfObjectValues<AccessPackageImpl>("accessPackages", accessPackagesArrValue);
        }
        if(this.catalogType){
        writer.writeEnumValue<AccessPackageCatalogType>("catalogType", this.catalogType);
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.isExternallyVisible){
        writer.writeBooleanValue("isExternallyVisible", this.isExternallyVisible);
        }
        if(this.modifiedDateTime){
        writer.writeDateValue("modifiedDateTime", this.modifiedDateTime);
        }
        if(this.state){
        writer.writeEnumValue<AccessPackageCatalogState>("state", this.state);
        }
    };
}
