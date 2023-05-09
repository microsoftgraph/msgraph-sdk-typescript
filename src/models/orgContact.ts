import {DirectoryObject} from './directoryObject';
import {OnPremisesProvisioningError} from './onPremisesProvisioningError';
import {Phone} from './phone';
import {PhysicalOfficeAddress} from './physicalOfficeAddress';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OrgContact extends DirectoryObject, Parsable {
    /** The addresses property */
    addresses?: PhysicalOfficeAddress[] | undefined;
    /** The companyName property */
    companyName?: string | undefined;
    /** The department property */
    department?: string | undefined;
    /** The directReports property */
    directReports?: DirectoryObject[] | undefined;
    /** The displayName property */
    displayName?: string | undefined;
    /** The givenName property */
    givenName?: string | undefined;
    /** The jobTitle property */
    jobTitle?: string | undefined;
    /** The mail property */
    mail?: string | undefined;
    /** The mailNickname property */
    mailNickname?: string | undefined;
    /** The manager property */
    manager?: DirectoryObject | undefined;
    /** The memberOf property */
    memberOf?: DirectoryObject[] | undefined;
    /** The onPremisesLastSyncDateTime property */
    onPremisesLastSyncDateTime?: Date | undefined;
    /** The onPremisesProvisioningErrors property */
    onPremisesProvisioningErrors?: OnPremisesProvisioningError[] | undefined;
    /** The onPremisesSyncEnabled property */
    onPremisesSyncEnabled?: boolean | undefined;
    /** The phones property */
    phones?: Phone[] | undefined;
    /** The proxyAddresses property */
    proxyAddresses?: string[] | undefined;
    /** The surname property */
    surname?: string | undefined;
    /** The transitiveMemberOf property */
    transitiveMemberOf?: DirectoryObject[] | undefined;
}
